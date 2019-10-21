## Back End (Immunization Tracking App) ==> SUBJECT TO CHANGE
---

### Back End Architect: Karen Li (Github: karenjli)

---

BASE URL:
--

https://immunizationtracker-bw.herokuapp.com/

--

### User Registration (POST)

https://immunizationtracker-bw.herokuapp.com/api/auth/user-register

Client sends:

{ 
	"userEmail": "ladygaga@gmail.com",
	"userPassword": "pokerface",
	"userName": "Lady Gaga"
}

Server returns: 

{ id: "5" }

### User Login (POST)

https://immunizationtracker-bw.herokuapp.com/api/auth/user-login

Client sends:

{ 
	"userEmail": "ladygaga@gmail.com",
	"userPassword": "pokerface",
}

Server returns:
{
  "message": "Welcome Lady Gaga", "token": "super-long-string-from-hashed-token"
}

### Medical Professional Registration (POST)

https://immunizationtracker-bw.herokuapp.com/api/auth/med-register

Client sends:

{ 
	"medicEmail": "selena@gmail.com",
	"medicPassword": "gomez",
	"company": "Disney",
	"position": "RN"
}

Server returns: 

{ id: "5" }

### Medical Professional Login (POST)

https://immunizationtracker-bw.herokuapp.com/api/auth/med-login

Client sends: 

{ 
	"medicEmail": "selena@gmail.com",
	"medicPassword": "gomez"
}

Server returns: 
{
  "message": "Welcome, RN", "medtoken": "the-super-long-hashed-token"
}

---
