/*** BEGIN META {
  "name" : "replaceBuildArtifact",
  "comment" : "Replaces a build artifact identified by a Jenkins URL endPoint with an alternate file",
  "parameters" : [ 'artifactURL','localDir'],
  "core": "2.121",
  "authors" : [
    { name : "Ioannis K. Moutsatsos" }
  ]
} END META**/

import hudson.model.*

/*
We only need localDir. The local artifact file name is auto-derived from URL end point
We can only replace local artifacts. 
Replacing an artifact on another server is not supported and will generate an error
*/

artifactName= artifactURL.split('/')[-1]
localFileName=artifactURL.split('/')[-4..-1].join('_')
localFilePath="$localDir/$localFileName"

artifactServerDir= getArtifactDirFromURL(artifactURL)

//Using AntBuilder to Copy a file
def ant=new AntBuilder()
ant.copy(file:"$localFilePath", toFile:"$artifactServerDir/$artifactName", overwrite:true){
 println "Replaced $artifactName with: \r\t $localFilePath " 
}

//Copy File to artifactServerDir with original name

def getArtifactDirFromURL(String url){
  buildInfo=getPathFromArchiveURL(url)
  job = hudson.model.Hudson.instance.getItem(buildInfo[0]) 
  build=job.getBuildByNumber(buildInfo[1].toInteger())
  //artifact= build.getArtifacts()
  try{
   build.getArtifactManager().getArtifactsDir()
  } catch(NullPointerException e){
   println "Unable to find source BUILD on this server"
    println "ERROR"
  }
}

def getPathFromArchiveURL(String url){
  artifact=url.split('job/')[1].tokenize('/')[0..1]
}
