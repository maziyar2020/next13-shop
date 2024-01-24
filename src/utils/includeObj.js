export const includeObj = (obj, includesKey) => {
    const newUser = {}

    Object.keys(obj)
        .filter(key => includesKey.includes(key))
        .forEach(key => newUser[key] = obj[key])
    
    return newUser
}