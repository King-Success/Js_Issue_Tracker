function fetchIssues() {
    let issues =  JSON.parse(localStorage.getItem('issues'));
    let issuesList = document.getElementById('issuesList');
    
    issuesList.innerHTML = '';
    
    for (let i = 0; i < issues.length; i++) {
        
        let id = issues[i].id;
        let desc = issues[i].description;
        let severity = issues[i].severity;
        let assignedTo = issues[i].assignedTo;
        let status = issues[i].status;
        
        issuesList.innerHTML += '<div class="well">' +
                                '<h6>Issue ID: ' + id + '</h6>' +
                                '<p><span class="label label-info">' + status + '</span></p>' +
                                '<h3>' + desc + '</h3>' +
                                '<p><span class="glyphicon glyphicon-time">' + severity + '</span></p>' +
                                '<p><span class="glyphicon glyphicon-user">' + assignedTo + '</span></p>' +
                                '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a>' +
                                '<a href="#" onclick="deleteIssue(\''+id+'\')" class="btn btn-danger">Close</a>' +
                                '</div>';
            
                                
    }
}

fetchIssues();