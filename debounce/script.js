const debounce = (fn, ms) => {
  let timeout;

  return function () {
    const fnCall = () => {
      fn.apply(this, arguments);
    };
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
};

function onChange(e) {
  console.log("*** onChange ***", this);

  console.log(e.target.value);
}

onChange = debounce(onChange, 200);

document.getElementById("search").addEventListener("keyup", onChange);

function throttle(func, ms) {
  let isThrottled = false;
  let savedArgs;
  let savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

let mousePos = { x: undefined, y: undefined };

function mouseMove(event) {
  mousePos = { x: event.clientX, y: event.clientY };
  console.log(mousePos);
}

mouseMove = throttle(mouseMove, 3000);

window.addEventListener("mousemove", mouseMove);

// setInterval(mouseMove, 1000);
