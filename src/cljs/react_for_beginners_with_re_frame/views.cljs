(ns react-for-beginners-with-re-frame.views
  (:require [reagent.core  :as reagent]
            [re-frame.core :refer [subscribe dispatch]]
            [react-for-beginners-with-re-frame.subs :as subs]))

;; store-picker

(defn store-picker []
  (let [name (subscribe [::subs/name])]
    [:div
     [:form.store-selector {:on-submit #(.log js/console "store")}
      [:h2 "Please Enter A Store"]
      [:input {:type "text" :required true :default-value "first-store"}]
      [:button {:type "submit"} "Visit Store"]
      [:a {:href "#/catch-of-the-day"} "Visit Store"]]]))

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

(defn order []
  [:div.order-wrap
   [:h2 "Your Order"]
   [:ul.order
  ;  (for [[id quant] @state/orders]
  ;    ^{:key id} [order id quant])
    [:li.total
     [:strong "Total:"]  "total"]]])

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
(defn inventory []
  [:div
   [:h2 "Inventory"]
  ; (for [{:keys [id name price status desc image]} (vals @state/fishes)]
  ;   ^{:key id} [inventory id name price status image desc])
   [add-fish-form]
   [:button {:on-click #(dispatch [:load-sample-fishes] )} "Load Sample Fishes"]])

;; fishes

(defn add-to-order [orders id]
  (swap! orders update (keyword id) (fnil inc 0)))

(defn fish [id name price status desc image]
  (let [orders (subscribe [:orders])]
    [:li.menu-fish {:key id}
     [:img {:src image :alt name}]
     [:h3.fish-name name
      [:span.price price]]
     [:p desc]
     [:button {:disabled (= status :unavailable)
               :on-click #(.log js/console @orders)}
      (if (= status :available) "Add To Order" "Sold Out!")]]))

;; catch-of-the-day

(defn catch-of-the-day []
  (let [fishes (subscribe [:fishes])]
    [:div.catch-of-the-day
     [:div.menu
      [header]
      [:ul.list-of-fishes
       (for [{:keys [id name price status desc image]} (vals @fishes)]
         ^{:key id} [fish id name price status desc image])]]
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
