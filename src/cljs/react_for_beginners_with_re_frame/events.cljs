(ns react-for-beginners-with-re-frame.events
  (:require [re-frame.core :as re-frame]
            [react-for-beginners-with-re-frame.db :as db]))

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
   (let [{id :id
          value :name} fish
          property (key (second fish))]
     (assoc-in db [:fishes id property] value))))
