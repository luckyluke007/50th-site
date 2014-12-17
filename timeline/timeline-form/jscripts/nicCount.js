function nicCount(editor, ctrId, minChars)  {
   // Count characters remaining in the given nicEditor (editor), and update the given counter (ctrId)
   counterObj = document.getElementById(ctrId);
   if(counterObj) {
      var content = editor.getContent();
      if(minChars - content.length >= 0) {
          // if there are no characters remaining, display the negative count in red
         counterObj.innerHTML = "<font color='red'>"+ (minChars + content.length) + "</font>"; 
      }
      else { // characters remaining
        counterObj.innerHTML = minChars + content.length; 
      }
   }
}