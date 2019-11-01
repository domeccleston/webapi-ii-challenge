const express = require('express');

const server = require('./server');

server.listen(3000, () => {
    console.log('\n*** Server running on http://localhost:3000 ***\n')
})



