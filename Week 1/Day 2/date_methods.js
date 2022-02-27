const d = new Date();
console.log(d.getFullYear())


function apiFunction(a,b) {
    if (this.state.userToken == '') {
            console.log("Please login first");
            alert("Please login first");
        }
        else {
            axios.put(`http://localhost:5000/api/realTime`, {
                Device: this.state.device,
                cord: a,
                shift: b
                
            })
                .then(res => {
                    if (res.status == 200) {

                        alert("Moving Laser");
                    }
                    else {
                        alert("Pattern Failed");
                    }

                })

            global.xcord = [];
            global.ycord = [];
            }
        }



        