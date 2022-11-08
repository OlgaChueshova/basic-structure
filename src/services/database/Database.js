import { initializeApp } from "firebase/app";
import {getFireStore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc} from "firebase/firestore";
import {API_KEY} from "../../constants/envValues";

export class Database {
    constructor() {
        const firebaseConfig = {
            apiKey: API_KEY,
            authDomain: "todo-list-517e0.firebaseapp.com",
            projectId: "todo-list-517e0",
            storageBucket: "todo-list-517e0.appspot.com",
            messagingSenderId: "81945624629",
            appId: "1:81945624629:web:16777071147d3eb6fef17c",
            measurementId: "G-9RXCW3RPBJ",
          };

          const app = initializeApp(firebaseConfig);
          this._database = getFireStore(app);
    }

    create(collectionKey, body) {
        const collectionRef = collection(this._database, collectionKey);
        return addDoc(collectionRef, body)
    }

    read(collectionKey) {
        const collectionRef = collection(this._database, collectionKey);
        return getDocs(collectionRef).then((documents) => {
            return documents.docs.map((doc) => ({...doc.data(), id: doc.id}))
        }); 
    }

    update(collectionKey, id, body) {
        const document = doc(this._database, collectionKey, id);
        return updateDoc(document, body);
    }

    delete(collectionKey, id) {
        const document = doc(this._database, collectionKey, id);
        return deleteDoc(document);
    }

    static getInstance () {
        if(!Database.instance) {
            Database.instance = new Database()
        }
    }
}