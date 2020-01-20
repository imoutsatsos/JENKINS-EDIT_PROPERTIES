# EDIT_PROPERTIES README #
EDIT_PROPERTIES: A utility project to review, create, update and delete properties in a property file

### What is this repository for? ###

The repository provides an archive of the key artifacts required to setup (or update) the job on a Jenkins server. Artifacts include:

* Job configuration, and job-specific properties and scripts
* Shared Groovy Scriptlets
* Shared External scripts

### Job Dependencies ###

### Deployment Instructions ###

* Clone the repository ```git clone https://github.com/imoutsatsos/JENKINS-EDIT_PROPERTIES.git```
* Deploy artifacts with [gradle](https://gradle.org/)
	* Open console in repository folder and execute command ```gradle deploy```
	* Deployment creates a **backup of all original files** (if they exist) in **qmic-EDIT_PROPERTIES/backup** folder
	* Project configuration, scripts and properties are deployed to **$JENKINS_HOME/jobs/EDIT_PROPERTIES** folder
	* Scriptlets are deployed to **$JENKINS_HOME/scriptlet/scripts** folder

* Review project plugins (shown below with latest version tested) and install as needed
 	* scriptler@2.9
  	* uno-choice@2.1
  	* ws-cleanup@0.34
 

### How do I build this job? ###

1. Provide a URL of a java style properties file
2. Select one or more properties to review or edit. Use the filter to easily identify related properties
3. Current values of selected PROPERTIES are dsiplayed. You can edit the VALUE field directly
4. Perform one of the availabel Actions (UPDATE,DELETE,CREATE,RENAME). Actions apply to checked PROPERTY values only
5. Click 'Build' to replace original properties file with the updated one. A backup of the original file is archived as a build artifact


### Who do I talk to? ###

* Please, file an issue if you have questions or problems using this job
