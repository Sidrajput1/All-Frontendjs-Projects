function creatUser(user,score){
    this.user = user;
    this.score =score;
}

creatUser.prototype.display = function(){
   console.log(`User name is ${this.user}`);
   console.log(`user score is ${this.score}`)
}
creatUser.prototype.increment = function(){
    this.score++;
}
const u1 = new creatUser("rishu",25);
const s1 = new creatUser("sid",250);
s1.increment();
s1.display();
u1.display();
