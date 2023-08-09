window.addEventListener('load', ()=>{
    let targetElement = document.getElementById('navbar');

    fetch('navbar.html').then((res)=>{
        return res.text();
    }).then((html)=>{
        targetElement.innerHTML = html;
    }).catch((error)=>{
        console.log('Error fetching the navbar', error);
    })
})

// HANDLE REGISTRATION
if(window.location.pathname == '/register.html'){
    const registration_form = document.querySelector('.registration-form')
    const txtfullname = document.querySelector('.txtfullname')
    const txtemail = document.querySelector('.txtemail')
    const txtprofile = document.querySelector('.txtprofile')
    const txtpassword = document.querySelector('.txtpassword')

    let profileurl = ''
    const regError = document.querySelector('.regError')

    txtprofile.addEventListener('change', (event)=>{
        
        const target = event.target
        const files = target.files
        if(files){
            const formData = new FormData()
            formData.append("file", files[0])
            formData.append("upload_preset", "jituconstructions")
            formData.append("cloud_name", "dtn9kzx2v")

            fetch('https://api.cloudinary.com/v1_1/dtn9kzx2v/image/upload', {
                method: "POST",
                body: formData
            }).then((res) => res.json()).then(res => profileurl = res.url)
        }
    })

    registration_form.addEventListener('submit', (e)=>{
        e.preventDefault();

        console.log(profileurl);
        let user = txtfullname.value !== '' && txtemail.value !== '' && txtpassword.value !== ''

        if(user){
            const promise = new Promise ((resolve , reject)=>{
                fetch('http://localhost:4500/employee/register',{
                    headers:{
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    method: "POST",
                    body:JSON.stringify({
                        "e_name": txtfullname.value,
                        "email": txtemail.value,
                        "profile": profileurl,
                        "password": txtpassword.value
                    })
                }).then(res=>(res.json())).then(data=>{
                    console.log(data);
                    regError.innerHTML = data[0]?.message ?? data?.message
                    resolve(data)
                }).catch(error =>{
                    console.log(error);
                    reject(error)
                })
            })
        }
    })
}

// HANDLE LOGIN LOGIN

if(window.location.pathname == '/login.html'){ 
    const login_form = document.getElementById('login-form');
    const txtloginemail = document.querySelector('.txtloginemail')
    const txtloginpwd = document.querySelector('.txtloginpwd')

    const btnLogin = document.querySelector('.btnlogin')
    const loginMsgs = document.querySelector('.loginErrors')
    let token = ''
    
    login_form.addEventListener('submit', (e)=>{
        e.preventDefault()

        const user = txtloginemail.value !== '' && txtloginpwd.value !== ''

        if(user){
            btnLogin.value = 'Please wait...'
            const promise = new Promise((resolve, reject)=>{
                fetch('http://localhost:4500/employee/login', {
                    headers:{
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    },
                    method: "POST",
                    body:JSON.stringify({
                        "email": txtloginemail.value,
                        "password": txtloginpwd.value
                    })
                }).then(res => (res.json())).then(data=>{
                    loginMsgs.innerHTML = data?.message 
                    token = data?.token

                    localStorage.setItem('token', token)
                    setTimeout(() => {
                        loginMsgs.innerHTML = ''
                    }, 3000);
                })
            })

            if(localStorage.getItem('token')){
                fetch('http://localhost:4500/employee/check', {
                    headers:{
                        'Accept': 'application/json',
                        'Content-type': 'application/json',
                        "token": localStorage.getItem('token')
                    },
                    method: "GET"
                })
            }
        }
    })
}