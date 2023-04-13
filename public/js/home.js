$('.submit-btn').click(async function(){

    let data = {
        name: $("#name").val(),
        roomId: $("#room-id").val()
    }
    if (data.name === ""){
        alert("name required")
    } else{
        if (data.roomId === ""){
        await $.ajax({
            "url":"/genrate-room-id",
            "type": "get",
            "data":data,
            "success": function(resp){
                data.roomId = resp.roomId
            }
        })
    }
    }
    window.location.href = `/chat?name=${data.name}&roomId=${data.roomId}`
});
