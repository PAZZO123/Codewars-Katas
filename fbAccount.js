var facebookProfile={
    name: "Pazzo",
    friends:55,
    messages:["hello","hi there","xup kapo","muraho"],
    postMessage: function(message){
        facebookProfile.messages.push(message)
    },
    
    deleteMessage:function(index){
        facebookProfile.messages.splice(index,1);
    },
    addFriend:function(){
        facebookProfile.friends++;
    },
    removeFriend:function(){
        facebookProfile.friends--;
    }
    
}