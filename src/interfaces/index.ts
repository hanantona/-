export interface Doctor {
    doctor_id: number;
    doctor_surname: string;
    doctor_name: string;
    doctor_lastname: string;
    doctor_stag: string;
    doctor_spesialization: string;
}

export interface DoctorList {
    Doctors: Doctor[];
}

export interface Client {
    client_name: string;
    client_surname: string;
    client_phonenumber: string;
    client_tempreture: number;
    client_addres: string;
    client_jaloby: string;
    client_gol_bol: string;
}
