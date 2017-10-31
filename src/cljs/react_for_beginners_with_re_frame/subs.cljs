(ns react-for-beginners-with-re-frame.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
 ::active-panel
 (fn [db _]
   (:active-panel db)))

(re-frame/reg-sub
 :fishes
 (fn [db _]
   (:fishes db)))

(re-frame/reg-sub
 :edit-fish
 (fn [db id]
   (.log js/console id) ;; must pass keyword
   (get-in db [:fishes id :name] )))

(re-frame/reg-sub
 :orders
 (fn [db _]
   (:orders db)))
