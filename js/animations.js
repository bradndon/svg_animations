
function start() {
  $(".top-rect")
      .delay(0)
      .velocity({ x: "+=150" })
      .velocity({ height: "25"})
      .velocity({ rotateZ: 360}  , { duration: 4400 })
      .velocity({ height: "50"})
      .velocity({ x: "+=150" })
      .velocity({ x: "-100", rotateZ: 0}, { duration: 0, complete: start});
  $(".bottom-rect")
      .delay(0)
      .velocity({ x: "+=150" })
      .velocity({ height: "25", y: "+=25"})
      .velocity({ rotateZ: 360}  , { duration: 4400 })
      .velocity({ height: "50", y: "-=25"})
      .velocity({ x: "+=150" })
      .velocity({ x: "-100", rotateZ: 0}, { duration: 0});
  $(".middle-rect")
      .delay(00)
      .velocity({ x: "+=150"})
      .delay(400)
      .velocity({ rotateZ: "-3600"}, { duration: 4400})
      .delay(400)
      .velocity({ x: "+=150"})

      .velocity({ rotateZ: 0, x: "-60"}, { duration: 0});

}
start();
