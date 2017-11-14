(ns react-for-beginners-with-re-frame.events
  (:require [re-frame.core :as re-frame]
            [react-for-beginners-with-re-frame.db :as db]
            [day8.re-frame.http-fx]
            [ajax.core :as ajax]))

(re-frame/reg-event-db
 ::initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/reg-event-db
 ::set-active-panel
 (fn [db [_ active-panel]]
   (assoc db :active-panel active-panel)))

(re-frame/reg-event-db
 :load-sample-fishes
 (fn [db _]
   (assoc db :fishes db/sample-fishes)))

(re-frame/reg-event-fx
 :handler-with-http
 (fn [{:keys [db]} _]
   {:db (assoc db :show-twirly true)
    :http-xhrio {:method :get
                 :uri "https://gist.githubusercontent.com/jacekschae/78d981877af42bbeb949a16e11ff6a23/raw/e863da8d4e6dd3cebdbc79b490a5b61e31b3b811/fishes.json"
                 :timeout 8000
                 :response-format (ajax/json-response-format {:keyword? true})
                 :on-success [:good-http-result]
                 :on-failure [:bad-http-result]}}))

(re-frame/reg-event-db
 :good-http-result
 (fn [db [_ result]]
   (.log js/console result)))

;; routes

(re-frame/reg-event-db
 :go-to-store
 (fn [db [_ store-id]]
   (.log js/console store-id)
   (assoc db :active-panel :catch-of-the-day)))

;; fishes

(re-frame/reg-event-db
 :add-fish
 (fn [db [_ fish]]
   (let [id     (str "fish-" (.now js/Date))
         name   (:name @fish)
         price  (:price @fish)
         status (:status @fish)
         image  (:image @fish)
         desc   (:desc @fish)]
     (assoc-in db [:fishes (keyword id)] {:id id
                                          :name name
                                          :price price
                                          :status status
                                          :image image
                                          :desc desc}))))

(re-frame/reg-event-db
 :remove-fish
 (fn [db [_ id]]
   (update-in db [:fishes] dissoc id)))

(re-frame/reg-event-db
 :edit-fish
 (fn [db [_ fish]]
   (let [{id :id} fish
         value (val (second fish))
         property (key (second fish))]
     (assoc-in db [:fishes id property] value))))

;; orders

(re-frame/reg-event-db
 :add-to-order
 (fn [db [_ id]]
   (update-in db [:orders (keyword id)] (fnil inc 0))))

(re-frame/reg-event-db
 :remove-from-order
 (fn [db [_ id]]
   (update-in db [:orders] dissoc id)))
