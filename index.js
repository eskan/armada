const express = require("express");
const app = express();
const os = require("os");
const pretty = require("json-pretty-html").default;

app.get("/", function(req, res) {
  var nodeInfo = {
    hostname: os.hostname(),
    type: os.type(),
    platform: os.platform(),
    arch: os.arch(),
    release: os.release()
  };
  res.send(`<html>

<body>
    <style>
        body {
            font-family: Menlo, Monaco, "Courier New", monospace;
            background-color: #24282A;
            color: #d4d4d4;
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .json-pretty {
            padding: 30px;
            border: solid 1px white;
        }

        .json-selected {
            background-color: rgba(139, 191, 228, 0.19999999999999996);
        }

        .json-string {
            color: #6caedd;
        }

        .json-key {
            color: #ec5f67;
        }

        .json-boolean {
            color: #99c794;
        }

        .json-number {
            color: #99c794;
        }
    </style>
        <h4>Armada - node info</h4>
    <div class="container">
        ${pretty(nodeInfo)}
    </div>
</body>

</html>`);
});

app.listen(3000, function() {
  console.log("App listening on port 3000!");
});
