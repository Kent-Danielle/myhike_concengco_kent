function readDisplayQuote() {
  //console.log("I'm inside the readDisplayQuote!");

  //get into the right collection
  db.collection("quotes")
    .doc("tuesday")
    .onSnapshot(function (quoteDoc) {
      // console.log(quoteDoc.data());
      document.getElementById("quote").innerHTML = quoteDoc.data().quote;
    });
}
readDisplayQuote();

function insertName() {
  //to check if the user is logged in
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user.uid); //to know who is the user that logged in to get the username

      currentUser = db.collection("users").doc(user.uid);
      currentUser.get().then(function (userDoc) {
        var username = userDoc.data().name;
        document.getElementById("username").innerHTML = username;
      });
    }
  });
}
insertName();
