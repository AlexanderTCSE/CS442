
class Keys{
    //Logs a keystroke as down or up
    constructor(){
        this.keys_down={}
    }

    //Event listener
    static start_listening(){
        let keys = new Keys();

        //If key is pressed, log true
        addEventListener('keydown',function(ev){
            if(typeof ev.code === 'string'){
                keys.keys_down[ev.code]=true;
            }
        })

        //If key is unpressed, log false
        addEventListener('keyup',function(ev){
            if(typeof ev.code === 'string'){
                keys.keys_down[ev.code]=false;
            }
        })

        return keys;
    }

    is_key_down(code){
        return !!this.keys_down[code];
    }

    is_key_up(code){
        return !this.keys_down[code];
    }

    keys_down_list(){
        return Object.entries(this.keys_down)
            .filter(kv => kv[1])
            .map(kv => kv[0])
    }
}