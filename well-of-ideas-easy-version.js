//Well of Ideas - Easy Version

function well(x){
  let goodIdeas = x.filter(idea => idea === "good")
  if (goodIdeas.length > 2){
    return "I smell a series!"
  }else if (goodIdeas.length <= 2 && goodIdeas.length > 0){
    return "Publish!"
  }else {
    return "Fail!"
  }
}
