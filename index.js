document.addEventListener("DOMContentLoaded", function () {
  const btns = document.querySelectorAll('[data-press="key-pressed"]');
  const clap = document.getElementById("clap");
  const cowbell = document.getElementById("cowbell");
  const crash = document.getElementById("crash");
  const kick = document.getElementById("kick");
  const snare = document.getElementById("snare");
  const hh_closed = document.getElementById("hh-closed");
  const hh_open = document.getElementById("hh-open");
  const h_tom = document.getElementById("h-tom");
  const m_tom = document.getElementById("m-tom");
  const l_tom = document.getElementById("l-tom");

  window.addEventListener("keypress", (e) => {
    let keyed = e.key;

    switch (keyed) {
      case "q":
      case "Q":
        kick.currentTime = 0;
        kick.play();
        btns[0].classList.add("is-pressed");
        break;
      case "w":
      case "W":
        snare.currentTime = 0;
        snare.play();
        btns[1].classList.add("is-pressed");
        break;
      case "e":
      case "E":
        hh_closed.currentTime = 0;
        hh_closed.play();
        btns[2].classList.add("is-pressed");
        break;
      case "r":
      case "R":
        hh_open.currentTime = 0;
        hh_open.play();
        btns[3].classList.add("is-pressed");
        break;
      case "t":
      case "T":
        crash.currentTime = 0;
        crash.play();
        btns[4].classList.add("is-pressed");
        break;
      case "y":
      case "Y":
        cowbell.currentTime = 0;
        cowbell.play();
        btns[5].classList.add("is-pressed");
        break;
      case "u":
      case "U":
        clap.currentTime = 0;
        clap.play();
        btns[6].classList.add("is-pressed");
        break;
      case "i":
      case "I":
        h_tom.currentTime = 0;
        h_tom.play();
        btns[7].classList.add("is-pressed");
        break;
      case "o":
      case "O":
        m_tom.currentTime = 0;
        m_tom.play();
        btns[8].classList.add("is-pressed");
        break;
      case "p":
      case "P":
        l_tom.currentTime = 0;
        l_tom.play();
        btns[9].classList.add("is-pressed");
        break;
      default:
        console.log("Press the correct Key");
    }
  });

  window.addEventListener("keyup", (e) => {
    let keyed = e.key;

    switch (keyed) {
      case "q":
      case "Q":
        btns[0].classList.remove("is-pressed");
        break;
      case "w":
      case "W":
        btns[1].classList.remove("is-pressed");
        break;
      case "e":
      case "E":
        btns[2].classList.remove("is-pressed");
        break;
      case "r":
      case "R":
        btns[3].classList.remove("is-pressed");
        break;
      case "t":
      case "T":
        btns[4].classList.remove("is-pressed");
        break;
      case "y":
      case "Y":
        btns[5].classList.remove("is-pressed");
        break;
      case "u":
      case "U":
        btns[6].classList.remove("is-pressed");
        break;
      case "i":
      case "I":
        btns[7].classList.remove("is-pressed");
        break;
      case "o":
      case "O":
        btns[8].classList.remove("is-pressed");
        break;
      case "p":
      case "P":
        btns[9].classList.remove("is-pressed");
        break;
      default:
        console.log("Press the correct Key");
    }
  });

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let btnId = e.currentTarget.id;

      switch (btnId) {
        case "_kick":
          kick.currentTime = 0;
          kick.play();
          break;
        case "_snare":
          snare.currentTime = 0;
          snare.play();
          break;
        case "_hh-closed":
          hh_closed.currentTime = 0;
          hh_closed.play();
          break;
        case "_hh-open":
          hh_open.currentTime = 0;
          hh_open.play();
          break;
        case "_crash":
          crash.currentTime = 0;
          crash.play();
          break;
        case "_cowbell":
          cowbell.currentTime = 0;
          cowbell.play();
          break;
        case "_clap":
          clap.currentTime = 0;
          clap.play();
          break;
        case "_h-tom":
          h_tom.currentTime = 0;
          h_tom.play();
          break;
        case "_m-tom":
          m_tom.currentTime = 0;
          m_tom.play();
          break;
        case "_l-tom":
          l_tom.currentTime = 0;
          l_tom.play();
          break;
        default:
          console.log("No button was clicked!");
      }
    });
  });
});
