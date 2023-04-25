module.exports = class Player {
    constructor(){
        this.id = "";
        this.userAppId = "";
        this.phoneNumber = "";
        this.followedOA = "0";
        this.avatar = "";
        this.gender = "";
        this.playerName = "";
        this.room = "";
        this.position = [];
        this.isHost = "";
        this.isStarted = "0";
        this.isSpectator = "0";
        this.playerStatus = "die";
        this.timer = 0;
        this.timeWin = 0;
    }
    
}