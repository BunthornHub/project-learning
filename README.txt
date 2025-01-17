#Run the server using Uvicorn:
uvicorn main:app --reload
#Generate the requirements.txt:This command saves all installed packages and their versions in the requirements.txt file.
pip freeze > requirements.txt
