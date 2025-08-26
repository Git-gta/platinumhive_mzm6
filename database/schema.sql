CREATE TABLE Project (
    project_id INT PRIMARY KEY,
    name VARCHAR(50),
    category VARCHAR(50),
    niche VARCHAR(50),
    description TEXT,
    logoPrompt TEXT,
    estimatedPrice DECIMAL(10,2),
    marketPotential VARCHAR(50),
    developmentTime VARCHAR(20),
    targetAudience VARCHAR(50)
);

CREATE TABLE Features (
    feature_id INT PRIMARY KEY,
    feature_name VARCHAR(50)
);

CREATE TABLE TechStack (
    tech_id INT PRIMARY KEY,
    tech_type VARCHAR(20),
    tech_name VARCHAR(50)
);

CREATE TABLE MonetizationModel (
    model_id INT PRIMARY KEY,
    model_name VARCHAR(50)
);

CREATE TABLE ProjectFeatures (
    project_id INT,
    feature_id INT,
    FOREIGN KEY (project_id) REFERENCES Project(project_id),
    FOREIGN KEY (feature_id) REFERENCES Features(feature_id),
    PRIMARY KEY (project_id, feature_id)
);

CREATE TABLE ProjectTechStack (
    project_id INT,
    tech_id INT,
    FOREIGN KEY (project_id) REFERENCES Project(project_id),
    FOREIGN KEY (tech_id) REFERENCES TechStack(tech_id),
    PRIMARY KEY (project_id, tech_id)
);

CREATE TABLE ProjectMonetizationModel (
    project_id INT,
    model_id INT,
    FOREIGN KEY (project_id) REFERENCES Project(project_id),
    FOREIGN KEY (model_id) REFERENCES MonetizationModel(model_id),
    PRIMARY KEY (project_id, model_id)
);