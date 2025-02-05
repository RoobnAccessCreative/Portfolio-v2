CREATE TABLE IF NOT EXISTS projects (
    pID INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    -- text content
    summary TEXT NOT NULL, -- for projects.html
    info TEXT NOT NULL, -- for projIndiv.html
    recCommit DATE CHECK( recCommit IS strftime('%d/%m/%Y', recCommit) ), 
    -- images
    img IMAGE NOT NULL,
    logo IMAGE NOT NULL,
    -- links
    gitName TEXT, -- repository name to concat with the url
    figma TEXT,
    -- extra informaton
    colour TEXT NOT NULL,
    pinned BOOLEAN NOT NULL CHECK( pinned IN (1, 0) ), -- pinned or main section
    tags TEXT NOT NULL -- csv values: languages, project type
);