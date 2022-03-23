var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKeys.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: ""
});

const db = admin.firestore();

/*let employeeRef = db.collection("employees");

employeeRef.get().then((querySnapshot) => {
    querySnapshot.forEach(doc => {
        console.log(doc.data());
    })

})*/

const data = {
    id:3,
    firstName:"John",
    lastName:"Doe",
    email:"doe@infojini.com",
    empId: "E001",
}

const data1 = {
    id:4,
    firstName:"John",
    lastName:"bose",
    email:"bose@infojini.com",
    empId: "E002",
}

db.collection("employees").doc(data.id.toString()).set(data);
db.collection("employees").doc(data1.id.toString()).set(data);
