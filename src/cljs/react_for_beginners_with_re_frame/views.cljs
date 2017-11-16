(ns react-for-beginners-with-re-frame.views
  (:require [reagent.core  :as reagent]
            [re-frame.core :refer [subscribe dispatch]]
            [react-for-beginners-with-re-frame.subs :as subs]))


;; helpers


(defn format-price [price]
  (str "$" (/ price 100)))


;; store-picker

#_(defn go-to-store [event store-id]
  (.preventDefault event)
  (set! (.-href js/window.location) (str "#/catch-of-the-day/" store-id))
  #_(dispatch [:go-to-store store-id]))


(defn go-to-store [event store-id]
  (.preventDefault event)
  (set! (.-href js/window.location) (str "#/catch-of-the-day/" store-id)))

(defn store-picker []
  (let [name (subscribe [::subs/name])]
    [:div
     [:form.store-selector {:on-submit #(go-to-store % @name)}
      [:h2 "Please Enter A Store"]
      [:input {:type "text" :required true :default-value @name}]
      [:button {:type "submit"} "Visit Store"]
      [:a {:href (str "#/catch-of-the-day/" @name)} "Visit Store"]]]))


;; header


(defn header []
  [:header.top
   [:h1 "Catch"
    [:span.ofThe
     [:span.of "of"]
     [:span.the "the"]]
    "Day"]
   [:h3.tagline
    [:span "Fresh seafood"]]])


;; order


(defn order-item [id quant]
  (let [fishes (subscribe [:fishes])
        name (get-in @fishes [id :name])
        status (get-in @fishes [id :status])]
    (if (= (get-in @fishes [id :status]) :available)
      [:li
       [:span quant "lbs " name
        [:button {:on-click #(dispatch [:remove-from-order id])} "\u00D7"]]
       [:span.price (format-price (* quant (get-in @fishes [id :price])))]]
      [:li
       [:span (str "Sorry, " (if name name "fish") " no longer available")
        [:button {:on-click #(dispatch [:remove-from-order id])} "\u00D7"]]])))

(defn total []
  (let [fishes (subscribe [:fishes])
        orders (subscribe [:orders])]
    (->> @orders
         (remove (fn [[fish-id qty]] (= (get-in @fishes [fish-id :status]) :unavailable)))
         (map (fn [[fish-id qty]] (* qty (get-in @fishes [fish-id :price]))))
         (reduce +))))

(defn order []
  (let [orders (subscribe [:orders])]
    [:div.order-wrap
     [:h2 "Your Order"]
     [:ul.order
      (for [[id quant] @orders]
        ^{:key id} [order-item id quant])
      [:li.total
       [:strong "Total:"]  (format-price (total))]]]))


;; inventory


(defn add-fish-form []
  (let [default {:id "" :name "" :price 0 :status :available :desc "" :image ""}
        fish (reagent/atom default)]
    (fn []
      [:form.fish-edit
       [:input {:type           "text"
                :placeholder    "Fish Name"
                :value          (:name @fish)
                :on-change      #(swap! fish assoc :name (-> % .-target .-value))}]
       [:input {:type           "text"
                :placeholder    "Fish Price"
                :value          (:price @fish)
                :on-change      #(swap! fish assoc :price (-> % .-target .-value))}]
       [:select {:value         (:status @fish)
                 :on-change     #(swap! fish assoc :status (-> % .-target .-value))}
        [:option {:value        "available"} "Fresh!"]
        [:option {:value        "unavailable"} "Sold Out!"]]
       [:textarea {:placeholder "Fish Desc"
                   :on-change   #(swap! fish assoc :desc (-> % .-target .-value))
                   :value       (:desc @fish)}]
       [:input {:type           "text"
                :placeholder    "Fish Image"
                :value          (:image @fish)
                :on-change      #(swap! fish assoc :image (-> % .-target .-value))}]
       [:button {:type          "button"
                 :on-click      #(dispatch [:add-fish fish])} "+ Add Item"]])))

(defn edit-fish-form [id name price status desc image]
  (let [fishes (subscribe [:fishes])
        id (keyword id)]
    [:div.fish-edit
     [:input {:type "text"
              :name "name"
              :placeholder "Fish Name"
              :value name
              :on-change #(dispatch [:edit-fish {:id id
                                                 :name (-> % .-target .-value)}])}]
     [:input {:type "text"
              :name "price"
              :placeholder "Fish Price"
              :value price
              :on-change #(dispatch [:edit-fish {:id id
                                                 :price (-> % .-target .-value)}])}]
     [:select {:value status
               :name "status"
               :on-change #(dispatch [:edit-fish {:id id
                                                  :status (keyword  (-> % .-target .-value))}])}
      [:option {:value "available"} "Fresh!"]
      [:option {:value "unavailable"} "Sold Out!"]]
     [:textarea {:name "desc"
                 :placeholder "Fish Desc"
                 :value desc
                 :on-change #(dispatch [:edit-fish {:id id
                                                    :desc (-> % .-target .-value)}])}]
     [:input {:type "text"
              :name "image"
              :placeholder "Fish Image"
              :value image
              :on-change #(dispatch [:edit-fish {:id id
                                                 :desc (-> % .-target .-value)}])}]
     [:button {:on-click #(dispatch [:remove-fish id])} "Remove Fish"]]))

(defn inventory []
  (let [fishes (subscribe [:fishes])]
    [:div
     [:h2 "Inventory"]
     (for [{:keys [id name price status desc image]} (vals @fishes)]
       ^{:key name} [edit-fish-form id name price status image desc])
     [add-fish-form]
     [:button {:on-click #(dispatch [:load-sample-fishes] )} "Load Sample Fishes"][:br]
     [:button {:on-click #(dispatch [:get-fishes-ajax])} "Get AJAX data"][:br]
     [:button {:on-click #(dispatch [:get-fishes-ajax-string])} "Get AJAX data String"]]))


;; fishes


(defn fish [id name price status desc image]
  (let [orders (subscribe [:orders])]
    [:li.menu-fish {:key id}
     [:img {:src image :alt name}]
     [:h3.fish-name name
      [:span.price (format-price price)]]
     [:p desc]
     [:button {:disabled (= status :unavailable)
               :on-click #(dispatch [:add-to-order id])}
      (if (= status :available) "Add To Order" "Sold Out!")]]))


;; catch-of-the-day


(defn catch-of-the-day []
  (let [fishes (subscribe [:fishes])]
    [:div.catch-of-the-day
     [:div.menu
      [header]
      [:ul.list-of-fishes
       (for [{:keys [id name price status desc image]} (vals @fishes)]
         ^{:key name} [fish id name price status desc image])]]
     [order]
     [inventory]]))

;; main


(defn- panels [panel-name]
  (case panel-name
    :store-picker [store-picker]
    :catch-of-the-day [catch-of-the-day]
    [:div]))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (subscribe [::subs/active-panel])]
    [show-panel @active-panel]))
