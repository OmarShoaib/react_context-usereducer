import React, { createContext } from 'react';
// UseContext

// Context consists of provider and consumer
// const ValueContext = createContext(45);

// With default function to update the value
const ValueContext = createContext(45, ()=>{});

export default ValueContext;