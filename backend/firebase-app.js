import { initializeApp } from "@firebase/app";
import { collection, getDocs, getFirestore } from "@firebase/firestore";
import { async } from "@firebase/util";

const firebaseConfig = {
    apiKey: "AIzaSyAUV1z73QrmBXBWaqr9LjYYkMK0kraYio0",
    projectId: "planner-f7580",
    storageBucket: "planner-f7580.appspot.com",
    messagingSenderId: "1075993696837",
    appId: "1:1075993696837:web:4b146affaa43c26dd1612c"
}

const firebaseApp = initializeApp(firebaseConfig);

const dataBase = getFirestore(firebaseApp);

async function getTasks(dataBase) {
    const tasksColumn = collection(dataBase, 'Tasks');
    const taskSnapshot = await getDocs(tasksColumn);
    const taskList = taskSnapshot.docs.map(doc => doc.data);
    return taskList;
}


