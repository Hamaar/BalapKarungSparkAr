//memuat modul yang diperlukan
//yang bertujuan untuk mendeteksi wajah dan ekspresi wajah
const FaceGestures = require("FaceGestures");
const FaceTracking = require("FaceTracking");
const Reactive = require("Reactive");
const Scene = require("Scene");

//inisiasi player1 dengan mencari object karakter1 pada panel scene
const player1 = Scene.root.find("karakter1");
//inisiasi player1Transfom
const player1Transform = player1.transform;

//inisiasi player2 dengan mencari object karakter1 pada panel scene
const player2 = Scene.root.find("karakter2");
//inisiasi player1Transfom
const player2Transform = player2.transform;

//inisiasi face1 dengan deteksi wajah pertama
const face1 = FaceTracking.face(0);
//inisiasi face2 dengan deteksi wajah pertama
const face2 = FaceTracking.face(1);

//inisiasi stepRun dengan nilai 15.5
const stepRun = 15.5;
//inisiasi finishRun dengan nilai 250
const finishRun = 250;

//melakukan fungsi berkedip
FaceGestures.onBlink(face1).subscribe(function () {
  // inisiasi lastPositionX bernilai player1Transform x
  const lastPositionX = player1Transform.x.pinLastValue();

  // inisiasi newPositionx dengan isi menambahkan lasposition dengan nilai stepRun
  const newPositionX = Reactive.add(lastPositionX, stepRun);
  // inisiasi player1 transfom x dengan newpositionx
  player1.transform.x = newPositionX;

  // jika player1 transform x lebih dari sama dengan nilai finishRun
  if (player1Transform.x.pinLastValue() >= finishRun) {
    //inisiasi player1 transfom x dengan lastpositionx
    player1.transform.x = lastPositionX;
  }
});

//melakukan fungsi berkedip
FaceGestures.onBlink(face2).subscribe(function () {
  // inisiasi lastPositionX bernilai player2Transform x
  const lastPositionX = player2Transform.x.pinLastValue();

  // inisiasi newPositionx dengan isi menambahkan lasposition dengan nilai stepRun
  const newPositionX = Reactive.add(lastPositionX, stepRun);
  // inisiasi player2 transfom x dengan newpositionx
  player2.transform.x = newPositionX;

  // jika player2 transform x lebih dari sama dengan nilai finishRun
  if (player2Transform.x.pinLastValue() >= finishRun) {
    //inisiasi player2 transfom x dengan lastpositionx
    player2.transform.x = lastPositionX;
  }
});
