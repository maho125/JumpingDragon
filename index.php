<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <meta name="author" content="Tomáš Mahrík, tomas[at]beedigital.sk" />
    <title>MovieClips, Collisions & Keyboard Events with PandaJS</title>

    <style>
      body{
        background-color: #777;
      }
      a,a:hover{
        color: #ff0000; 
      }
    </style>

    <script type="text/javascript" src="js/game/config.js"></script>
    <script type="text/javascript" src="js/engine/core.js"></script>
    <script type="text/javascript" src="js/game/main.js"></script>
</head>
<body>
<h1 style="color: #fff; text-align:center;font-size:16px;">MovieClips, Collisions & Keyboard Events with PandaJS</h1>
<p style="color: #fff; text-align:center;"><strong>Player Control:</strong> [JUMP] -> up arrow key or W, [LEFT] -> left arrow key or A, [RIGHT] -> right arrow key or D | <a href="https://github.com/maho125/JumpingDragon" target="_blank"><strong>Download source code</strong></a></p>

<div style="position:absolute; top:50px;right:50px;">
  <a href="https://twitter.com/share"  class="twitter-share-button" data-via="maho125" data-size="large" data-related="beedigitalSk" data-hashtags="pandajs">Tweet</a>
</div>

<div style="position:absolute; top:100px;right:50px;">
<iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.demos.tomasmahrik.com%2Fphysicsdemo1&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:21px;width:150px;" allowTransparency="true"></iframe>
</div>

<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
</body>
</html>