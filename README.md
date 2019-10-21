## Back End (Immunization Tracking App) ==> SUBJECT TO CHANGE
---

### Back End Architect: Karen Li (Github: karenjli)

---

BASE URL:
--

https://immunizationtracker-bw.herokuapp.com/

--

# REGISTRATION & LOGIN

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

# PATIENT INFO (USER SIDE)

### DISPLAY PATIENT INFO RELATED TO SPECIFIC USER (GET) (USER ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/user/:id

**Note: "id" on URL refers to the USER ID, which is also stored in the token. One user may have multiple patients due to having kids profile

Server returns:
[
  {
    "id": 1,
    "firstName": "Karl",
    "lastName": "Mozart",
    "age": 10,
    "gender": "male",
    "weight": "80lb",
    "height": "4'11",
    "patientEmail": "mozart@gmail.com",
    "patientPhone": "123-345-5678",
    "isChild": 1,
    "userId": 1
  },
  {
    "id": 2,
    "firstName": "Wolfgang",
    "lastName": "Mozart",
    "age": 45,
    "gender": "male",
    "weight": "150lb",
    "height": "5'5",
    "patientEmail": "mozart@gmail.com",
    "patientPhone": "123-345-5678",
    "isChild": 0,
    "userId": 1
  }
]

### DISPLAY SINGLE PATIENT INFO (GET) (USER ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/user/patient/:id

**Note: "id" refers to the "patient Id" that is created when the patient is created, NOT USER ID. 

Server returns: 
{
  "id": 6,
  "firstName": "Alois",
  "lastName": "Polzelli",
  "age": 10,
  "gender": "male",
  "weight": "90lb",
  "height": "5'2",
  "patientEmail": "haydn@gmail.com",
  "patientPhone": "123-345-5678",
  "isChild": 1,
  "userId": 5
}

### ADD PATIENT FROM USER ACCOUNT (POST) (USER ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/user/addpatient

Client sends: 
{"firstName":"Jennifer", "lastName":"Lopez", "age": 40,"gender": "female", "weight": "140lb","height": "5'7","patientEmail": "jlopez@gmail.com","patientPhone": "123-345-5678","isChild": false,"userId": 2}

**Note: "userId" refers to the "id" of the user that is adding the patient

Server returns: 
{
  "message": "New patient created",
  "patient": {
    "id": 7
  }
}

### EDIT PATIENT INFO FROM USER ACCOUNT (PUT) (USER ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/user/patient/:id

**Note: "Id" on URL refers to the patient id

Client sends:

 {"firstName":"Jennifer", "lastName":"Lopez", "age": 40,"gender": "female", "weight": "150lb","height": "5'7","patientEmail": "jlopez@gmail.com","patientPhone": "123-345-5678","isChild": false,"userId": 2}
 
 Server returns:
 
{
  "message": "Patient information updated"
}

### DELETE PATIENT INFO FROM USER ACCOUNT (DELETE) (USER ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/user/patient/7

**Note: "Id" on URL refers to patient id

Server returns:
{
  "message": "Patient deleted"
}

### GIVE PERMISSION TO MEDICAL PROFESSIONAL TO ACCESS DATA (POST) (USER ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/perm/add

Client sends:




Server returns:

{
  "message": "New permission request posted"
}

### EDIT PERMISSION GRANTED TO MEDICAL PROFESSIONAL (PUT) (USER ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/perm/update/:id

**Note: "id" refers to the permission id
Client sends: 

{"permission": true, "patientId":6, "medproId":1}

Server returns:

{
  "message": "Permission status changed"
}


### DISPLAY LIST OF PERMISSIONS BY PATIENT ON USER SIDE(GET) (BOTH USER AND MEDIC HAVE ACCESS)

https://immunizationtracker-bw.herokuapp.com/api/perm/patient/:id

**Note: "id" on URL refers to patient ID

Server returns:

[
  {
    "permission": false,
    "patientId": 1,
    "medproId": 1,
    "id": 1,
    "firstName": "Karl",
    "lastName": "Mozart",
    "age": 10,
    "gender": "male",
    "weight": "80lb",
    "height": "4'11",
    "patientEmail": "mozart@gmail.com",
    "patientPhone": "123-345-5678",
    "isChild": 1,
    "userId": 1
  },
  {
    "permission": false,
    "patientId": 1,
    "medproId": 2,
    "id": 1,
    "firstName": "Karl",
    "lastName": "Mozart",
    "age": 10,
    "gender": "male",
    "weight": "80lb",
    "height": "4'11",
    "patientEmail": "mozart@gmail.com",
    "patientPhone": "123-345-5678",
    "isChild": 1,
    "userId": 1
  }
]

---

# PATIENT INFO (MEDICAL PROFESSIONAL SIDE) 

### DISPLAY PATIENT INFO ON MEDICAL PROFESSIONAL (GET) (MEDIC ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/perm/:id

**Note: "Id" on URL refers to medical professional ID

Server returns: 
[
  {
    "permission": 1,
    "patientId": 5,
    "medproId": 1,
    "id": 1,
    "firstName": "Alois",
    "lastName": "Polzelli",
    "age": 10,
    "gender": "male",
    "weight": "90lb",
    "height": "5'2",
    "patientEmail": "haydn@gmail.com",
    "patientPhone": "123-345-5678",
    "isChild": 1,
    "userId": 5,
    "medicEmail": "marie@gmail.com",
    "medicPassword": "curie",
    "company": "MedFirst",
    "position": "OBGYN"
  }
]

**Note: The server will only show the information of patients who granted permission to medical professional.

#Immunization Records

### ADD IMMUNIZATION RECORD FOR PATIENT (POST) (MEDIC ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/record/addImmunization

Client sends: 

{"vaccineName": "TDap", "vaccineDate": "2000-10-12", "vaccineLocation": "Houston", "patientId":1}

Server returns:

{
  "message": "New immunization record added",
  "record": [
    3
  ]
}

### DELETE IMMUNIZATION RECORD FOR PATIENT (DELETE) (MEDIC ACCESS ONLY)

https://immunizationtracker-bw.herokuapp.com/api/record/vaccine/:id

**Note: "id" in URL refers to the id from "immunization record"

Server returns:

{
  "message": "Immunization Record deleted"
}

### GET IMMUNIZATION RECORD BY PATIENT ID (GET) (BOTH USER AND MEDIC HAVE ACCESS)

https://immunizationtracker-bw.herokuapp.com/api/record/:id

**Note: "id" refers to patient ID

Server returns: 

[
  {
    "id": 1,
    "vaccineName": "flu",
    "vaccineDate": "2010-12-19",
    "vaccineLocation": "New York City",
    "patientId": 1
  },
  {
    "id": 2,
    "vaccineName": "HPV",
    "vaccineDate": "2000-10-12",
    "vaccineLocation": "Houston",
    "patientId": 1
  }
] 
