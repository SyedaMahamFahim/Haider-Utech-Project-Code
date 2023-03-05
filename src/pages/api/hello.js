// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const obj={ name: 'John Doe' , age: 30}
    res.status(200).json(obj)
}



// req ---> request
// res ---> response


// 400 ----> Bad Request client side error
// 401 ----> Unauthorized
// 403 ----> Forbidden
// 404 ----> Not Found
// 405 ----> Method Not Allowed
// 500 ----> Internal Server Error
// 501 ----> Not Implemented
// 502 ----> Bad Gateway
// 503 ----> Service Unavailable
// 504 ----> Gateway Timeout
 

// 200 ----> OK
// 201 ----> Created
// 202 ----> Accepted
// 203 ----> Non-Authoritative Information
// 204 ----> No Content
// 205 ----> Reset Content
// 206 ----> Partial Content



// admin --> student 