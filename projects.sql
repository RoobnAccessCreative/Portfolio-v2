CREATE TABLE IF NOT EXISTS projects (
    pID INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    -- text content
    summary TEXT NOT NULL,
    info TEXT NOT NULL,
    recCommit DATE CHECK( recCommit IS strftime('%d/%m/%Y', recCommit) ), 
    -- images
    img IMAGE NOT NULL,
    logo IMAGE NOT NULL,
    -- links
    gitName TEXT,
    figma TEXT,
    -- gradient colour
    colour TEXT NOT NULL,
    -- which section
    pinned BOOLEAN NOT NULL CHECK( pinned IN (1, 0) )
);