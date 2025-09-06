class Consoles{
    static consoles = ['Wii','Ds','Ps2','Mega Drive']
    static todosConsoles() {
        return this.consoles
    }
    static console(i){
        return this.consoles[i]
    }
    static addconsole (n){
        this.consoles.push(n)
    }
    static delconsoles(){
        this.consoles = []
    }
}

export default Consoles