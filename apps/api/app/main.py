from fastapi import FastAPI

app = FastAPI(title="FoundrAI API")


@app.get("/health")
def health_check():
    return {"status": "ok"}
