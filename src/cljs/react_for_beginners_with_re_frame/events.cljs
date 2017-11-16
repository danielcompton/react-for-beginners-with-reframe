(ns react-for-beginners-with-re-frame.events
  (:require [re-frame.core :as re-frame]
            [react-for-beginners-with-re-frame.db :as db]
            [day8.re-frame.http-fx]
            [ajax.core :as ajax]
            [cljs.spec.alpha :as s]))

;; helpers

(def check-spec
  (re-frame/after
    (fn [db _]
      (when-not (s/valid? ::db/db db)
        (js/console.error (s/explain-str ::db/db db))))))

(def default-interceptors [check-spec])

(re-frame/reg-event-db
 ::initialize-db
 default-interceptors
 (fn  [_ _]
   db/default-db))

(re-frame/reg-event-db
 ::set-active-panel
 default-interceptors
 (fn [db [_ active-panel]]
   (assoc db :active-panel active-panel)))

(re-frame/reg-event-db
 :load-sample-fishes
 default-interceptors
 (fn [db _]
   (assoc db :fishes db/sample-fishes)))

(re-frame/reg-event-fx
 :get-fishes-ajax
 default-interceptors
 (fn [_ _]
   {:http-xhrio {:method :get
                 :uri "https://rawgit.com/jacekschae/3260876f7ab279adb0a6060ae2a7cb43/raw/d4723e628fc75bab19206e5cb4973ce9bbcc4a7f/fishes.json"
                 :timeout 8000
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success [:load-sample-fishes-ajax]
                 :on-failure [:bad-http-result]}}))

(re-frame/reg-event-fx
 :get-fishes-ajax-string
 default-interceptors
 (fn [_ _]
   {:http-xhrio {:method :get
                 :uri "https://gist.githubusercontent.com/jacekschae/3260876f7ab279adb0a6060ae2a7cb43/raw/22a67bbe7bee54fedc9af35e5b65c39617b4f514/fishes.json"
                 :timeout 8000
                 :response-format (ajax/json-response-format {:keyword? true})
                 :on-success [:load-sample-fishes-ajax]
                 :on-failure [:bad-http-result]}}))

(re-frame/reg-event-db
 :load-sample-fishes-ajax
 default-interceptors
 (fn [db [_ result]]
   (js/console.log result)
   (assoc db :fishes result)))


;; routes

(re-frame/reg-event-db
 :go-to-store
 default-interceptors
 (fn [db [_ store-id]]
   (.log js/console store-id)
   (assoc db :active-panel :catch-of-the-day)))

;; fishes

(re-frame/reg-event-db
 :add-fish
 default-interceptors
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
 default-interceptors
 (fn [db [_ id]]
   (update-in db [:fishes] dissoc id)))

(re-frame/reg-event-db
 :edit-fish
 default-interceptors
 (fn [db [_ fish]]
   (let [{id :id} fish
         value (val (second fish))
         property (key (second fish))]
     (assoc-in db [:fishes id property] value))))

;; orders

(re-frame/reg-event-db
 :add-to-order
 default-interceptors
 (fn [db [_ id]]
   (update-in db [:orders (keyword id)] (fnil inc 0))))

(re-frame/reg-event-db
 :remove-from-order
 default-interceptors
 (fn [db [_ id]]
   (update-in db [:orders] dissoc id)))
