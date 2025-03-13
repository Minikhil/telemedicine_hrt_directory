-- Create clinics table
CREATE TABLE clinics (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    website TEXT NOT NULL,
    starting_price TEXT NOT NULL,
    available_states TEXT[] NOT NULL,
    services TEXT[] NOT NULL,
    insurance_accepted BOOLEAN NOT NULL,
    prescription_offered BOOLEAN NOT NULL,
    lab_work_included BOOLEAN NOT NULL,
    consultation_fee TEXT NOT NULL,
    average_wait_time TEXT NOT NULL,
    rating DECIMAL(3,1) NOT NULL,
    review_count INTEGER NOT NULL,
    image_url TEXT,
    trustpilot_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create an index on the name field for faster searches
CREATE INDEX clinics_name_idx ON clinics(name);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update the updated_at column
CREATE TRIGGER update_clinics_updated_at
    BEFORE UPDATE ON clinics
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 