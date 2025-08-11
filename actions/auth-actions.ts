"use server";

import {createUser, getUserByEmail} from "@/lib/user"
import {hashUserPassword, verifyPassword} from "@/lib/hash"
import {createAuthSession, destroySession} from "@/lib/auth"
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
        const id = createUser(email, hashedPassword);
        await createAuthSession(id)
        redirect('/blog')
    } catch (err: any) {
        if (err.code === "SQLITE_CONSTRAINT_UNIQUE") {
            return {
                errors: {
                    email: "User with chosen email already exists"
                }
            }
        }
        throw err;
    }
}

export async function login(prevState: any, formData: any) {
    const email = formData.get('email');
    const password = formData.get('password');

    const existingUser = getUserByEmail(email);

    if(!existingUser) {
        return {
            errors: {
                email: "Could not authenticate user, please check your credentials."
            }
        }
    }

    const isValidPassword = verifyPassword(existingUser.password, password)
    
    if(!isValidPassword) {
        return {
            errors: {
                password: "Password is incorrect."
            }
        }
    }

    await createAuthSession(existingUser.id);
    redirect('/blog');
}

export async function auth(mode: any, prevState: any, formData: any) {
    if(mode==="login") {
        return login(prevState, formData);
    }
    return signup(prevState, formData)
}

export async function logout() {
    await destroySession();
    redirect("/");
}