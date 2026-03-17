const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {

res.send(`

<!DOCTYPE html>
<html>
<head>
<title>Cybersecurity Awareness Platform</title>

<style>

body{
font-family: Arial;
background:#f4f6f9;
margin:0;
padding:0;
}

header{
background:#0a3d62;
color:white;
text-align:center;
padding:25px;
}

h1{
margin:0;
}

section{
padding:20px;
text-align:center;
}

.features{
display:flex;
justify-content:center;
gap:20px;
flex-wrap:wrap;
}

.card{
background:white;
padding:20px;
border-radius:10px;
box-shadow:0 2px 5px gray;
width:220px;
}

.card h3{
color:#0a3d62;
}

button{
background:#0a3d62;
color:white;
padding:10px 20px;
border:none;
border-radius:5px;
cursor:pointer;
font-size:16px;
}

button:hover{
background:#1e6fa5;
}

.quiz{
background:white;
margin:20px;
padding:20px;
border-radius:10px;
box-shadow:0 2px 5px gray;
}

footer{
background:#0a3d62;
color:white;
text-align:center;
padding:10px;
margin-top:20px;
}

</style>

</head>

<body>

<header>
<h1>Cybersecurity Awareness & Education Platform</h1>
<p>Learn Safe Digital Practices</p>
</header>

<section>
<h2>About the Platform</h2>

<p>
Many internet users lack awareness of cybersecurity risks and safe digital practices.
This platform helps users understand online threats through interactive learning
and phishing awareness training.
</p>

</section>

<section>

<h2>Platform Features</h2>

<div class="features">

<div class="card">
<h3>Interactive Training</h3>
<p>Learn cybersecurity basics through simple lessons and real examples.</p>
</div>

<div class="card">
<h3>Phishing Simulation</h3>
<p>Practice identifying fake emails and suspicious links.</p>
</div>

<div class="card">
<h3>Gamified Learning</h3>
<p>Earn points while learning safe online practices.</p>
</div>

</div>

</section>

<section class="quiz">

<h2>Cybersecurity Awareness Quiz</h2>

<form action="/submit" method="post">

<p>1. Is it safe to share OTP with anyone?</p>

<input type="radio" name="q1" value="yes"> Yes
<input type="radio" name="q1" value="no"> No

<br><br>

<p>2. Should you click links from unknown emails?</p>

<input type="radio" name="q2" value="yes"> Yes
<input type="radio" name="q2" value="no"> No

<br><br>

<p>3. Is using strong passwords important?</p>

<input type="radio" name="q3" value="yes"> Yes
<input type="radio" name="q3" value="no"> No

<br><br>

<button type="submit">Submit Quiz</button>

</form>

</section>

<footer>

<p>Cybersecurity Awareness Platform © 2026</p>

</footer>

</body>
</html>

`);

});

app.post("/submit", function(req,res){

let score = 0;

if(req.body.q1 === "no")
score++;

if(req.body.q2 === "no")
score++;

if(req.body.q3 === "yes")
score++;

res.send("<h1>Your Cybersecurity Score: " + score + "/3</h1><br><a href='/'>Go Back</a>");

});

app.listen(3000,function(){
console.log("Server running on port 3000");
});

