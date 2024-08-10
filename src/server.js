/**
 * FUENTE: https://expressjs.com/es/advanced/best-practice-security.html
 */

import express from "express";
import CookiesParser from "cookie-parser";
import cookieParser from "cookie-parser";

const app = express()

app.use(cookieParser());

app.get('/', (req,res) => {
    res.send('Hello World');
});

app.get('/setcookies', (req,res) => {
    res.cookie('My cookies','hello cookie', {
        //maxAge: 7000 // Tiempo de vida de Cookies
        //domain: 'example.com',
        //path: 'foo/bar',
        httpOnly: true,
        secure: true, // Permitido por http
        sameSite: 'strict', // Mismo dominio
        sameSite: 'lax' // dominio diferente
        
        // Esto perimite si el backend esta
        // en otro dominio diferente 
        //expires: new Date('2024-12-31') // Expiracion expecifico
    })
    res.send('Hello setcookies');
});

// Reading Cookies
app.get('/getcookies', (req,res) => {
    console.log(req.cookies);
    res.send('Reading Cookies');
})

// Delete Cookies
app.get('/deletecookies', (req,res) => {
    console.log(req.cookies);
    res.clearCookie('My cookies')
    res.send('Delete Cookies');
})

app.listen(3000);
console.log('Server runnig on Port 3000');