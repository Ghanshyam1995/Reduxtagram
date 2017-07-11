var axios =require("axios");

var id='57adfa16b60ffafd36a4';
var sec='fa0710000000e2f27a05f2072ab8ca3e738b1f7f';
var params="?client_id="+id+"&client_secret="+sec;
function getProfile(username)
{
    return axios.get("https://api.github.com/users/"+username+params).
    then(function(user){
          return user.data;
    });
}


function getRepos(username)
{
     return axios.get("https://api.github.com/users/"+username+"/repos"+params +"&per_page=100");
}

function getStarsCount(repos)
{
  return repos.data.reduce(function(count,repo){
      return count + repo.stargazers_count;
  },0);
}
function handleError(error)
{
    console.log(error);
    return null;
}

function calculateScore(profile,repos)
{
    var followers=profile.followers;
    var totalStart=getStarsCount(repos);
    return (followers * 3)+totalStart;
}

function getUserProfile(player)
{
       return axios.all([
           getProfile(player),
           getRepos(player)
       ]).then(function(data){
           var profile=data[0];
           var repos=data[1];
           return {
               profile:profile,
               score:calculateScore(profile,repos)
           }
       })
}
function sortPlayer(players)
{
    return players.sort(function(a,b){
        return b.score-a.score;
    })
}
module.exports={
   battle:function(players){
   return axios.all(players.map(getUserProfile)).then(sortPlayer)
   .catch(handleError);
   },

    fetchPopularRepo :function(language){
        var encodedURI=window.encodeURI("https://api.github.com/search/repositories"+
        "?q=stars:>1+language:"+language+"&sort=stars&order=desc&type=Repositories");
        return axios.get(encodedURI)
        .then((res)=>{
            return res.data.items;
        });
    }
}