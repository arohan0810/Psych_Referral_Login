let facilityId = null;

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  document.getElementById("loginError").textContent = "";

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      facilityId = userCredential.user.uid;
      loadFacilityData();
    })
    .catch(error => {
      document.getElementById("loginError").textContent = error.message;
    });
}

function loadFacilityData() {
  db.collection("facilities").doc(facilityId).get().then(doc => {
    if (doc.exists) {
      const data = doc.data();
      document.getElementById("maleBeds").value = data.maleBeds || 0;
      document.getElementById("femaleBeds").value = data.femaleBeds || 0;
      document.getElementById("insurances").value = (data.insurances || []).join(", ");
      document.getElementById("cases").value = (data.cases || []).join(", ");
      document.getElementById("requirements").value = data.requirements || "";
    }
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("formSection").style.display = "block";
  });
}

document.getElementById("facilityForm").addEventListener("submit", e => {
  e.preventDefault();
  const data = {
    maleBeds: parseInt(document.getElementById("maleBeds").value),
    femaleBeds: parseInt(document.getElementById("femaleBeds").value),
    insurances: document.getElementById("insurances").value.split(",").map(x => x.trim()),
    cases: document.getElementById("cases").value.split(",").map(x => x.trim()),
    requirements: document.getElementById("requirements").value.trim()
  };
  db.collection("facilities").doc(facilityId).set(data).then(() => {
    alert("Updated successfully!");
  });
});

function logout() {
  auth.signOut().then(() => {
    location.reload();
  });
}
