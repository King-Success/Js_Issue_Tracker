document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

function saveIssue(e) {
  let issueDesc = document.getElementById('issueDescInput').value;
  let issueSeverity = document.getElementById('issueSeverityInput').value;
  let issueAssignedTo = document.getElementById('issueAssignedTOInput').value;
  let issueId = chance.guid();
  let issueStatus = 'Open';
    
  let issue = {
    id: issueId, 
    description: issueDesc,
    severity: issueSeverity,
    assignedTo: issueAssignedTo,
    status: issueStatus
  }
    
  if(localStorage.getItem('issues') == null) {
     let issues = [];
     issues.push(issue);
     localStorage.setItem('issues', JSON.stringify(issues));
  }else {
      let issues = JSON.parse(localStorage.getItem('issues'));
      issues.push(issue);
      localStorage.setItem('issues', JSON.stringify(issues));
  };
    
    document.getElementById('issueInputForm').reset();
    
    fetchIssues();
    
    e.preventDefault();
    
    
};

function fetchIssues() {
    let issues =  JSON.parse(localStorage.getItem('issues'));
    let issuesList= document.getElementById('issuesList');
    
    issuesList.innerHTML = '';
    
//    if(issues) {
        
        for (let i = 0; i < issues.length; i++) {
        
        let id = issues[i].id;
        let desc = issues[i].description;
        let severity = issues[i].severity;
        let assignedTo = issues[i].assignedTo;
        let status = issues[i].status;
        
        issuesList.innerHTML += '<div class="well jumbotron">' +
                                '<h6>Issue ID: ' + id + '</h6>' +
                                '<span class="label label-info"></span><p>' + status + '</p>' +
                                '<h3>' + desc + '</h3>' +
                                '<span class="glyphicon glyphicon-time" aria-hidden="true"></span><p>' + severity + '</p>' +
                                '<span class="glyphicon glyphicon-user" aria-hidden="true"></span><p>' + assignedTo + '</p>' +
                                '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a>' +
                                '<a href="#" onclick="deleteIssue(\''+id+'\')" class="btn btn-danger" style="margin-left: 2px;">Delete</a>' +
                                '</div>';
            
                                
    }
    
};

//console.log(chance.guid());
