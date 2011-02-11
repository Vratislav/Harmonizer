<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <title>TODO supply a title</title>
        <link rel="stylesheet" type="texttext/css" href="style.css"></link>
        <script type="text/javascript"  src="jquery.js"></script>
        <script type="text/javascript"  src="utils.js"></script>
        <script type="text/javascript" src="harmony.js"></script>
        <script type="text/javascript" src="interval_tester.js"></script>

    </head>
    <body>
      <div id="canvas">
          <div id="mode_chooser">
              <h1>Vyber režimu</h1>
              <input id="write_tone_mode" type="radio" name="mode_radio" value="write_note_mode"/>Dopiš notu <br/>
              <input id="write_interval_mode" type="radio" name="mode_radio" value="write_note_mode"/> Napiš interval  <br/>
         </div>
         <div id="write_tone_tester">
              Interval: <span id="interval_name"></span><br/>
              V notách: <span id="start_tone"></span>-<input id="end_tone" type="text" size="3" maxlength="3"/><br/>
              <button id="check">Zkontroluj</button>
          </div>
          <div id="score_keeper">
              <h1>Skóre</h1>
              Počet otázek: <span id="question_count">0</span><br/>
              Správně odpovězeno: <span id="correct_count">0</span><br/>
              Správně v procentech: <span id="correct_percentage">0</span>%<br/>
          </div>

        <div id="debug">
        </div>
      </div>
    </body>
</html>
