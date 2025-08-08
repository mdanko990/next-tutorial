"use server";

import {createUser} from "@/lib/user"
import {hashUserPassword} from "@/lib/hash"
import {redirect} from 'next/navigation'

export async function signup(prevState: any, formData: any) {
    const email = formData.get('email');
    const password = formData.get('password');

    let errors = {
        email: '',
        password: ''
    }
    
    //replace with regex validation
    if (!email.includes("@")) {
        errors.email = "Please enter a valid email address."
    }

    if (password.trim().length < 8) {
        errors.password = "Password must be at least 8 characters long."
    }

    if(errors.email || errors.password) {
        return {
            errors,
        }
    }

    const hashedPassword = hashUserPassword(password)
    try {

        createUser(email, hashedPassword)
    } catch (err: any) {
        if (err.code === "SQLITE_CONSTRAINT_UNIQUE") {
            return {
                errors: {
                    email: "User with chosen email alredy exists"
                }
            }
        }
        throw err;
    }

    redirect('/blog');
}