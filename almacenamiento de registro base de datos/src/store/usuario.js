import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {auth}  from "../firebaseConfig";

export const useUserStore = defineStore("userStore", {
    
    state: () => ({
        userData : null
    }),
    actions: {
        async registerUser(email, password){
          try {
          const {user} = await createUserWithEmailAndPassword(auth, email, password );
             this.userData={
                email: user.email,
                uid: user.uid
             }
          } catch (error) {
            console.log(error)
          }
        },
        async loginUser(email, password){
          try {
            const {user} = await signInWithEmailAndPassword(auth, email, password)
            this.userData={
              email: user.email,
              uid: user.uid
           }
          } catch (error) {
            
          }
        },
        async logoutUser(){
          try {
            await signOut(auth)
            this.userData = null
          } catch (error) {
              console.log(error)
          }
        }
    },
});