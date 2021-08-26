package com.PickMyShow.message;

public class ResponseMessage {
	
	private String status;
	private String error;
	private String message;
	private String path;
	public ResponseMessage(String status, String error, String message, String path) {
		super();
		this.status = status;
		this.error = error;
		this.message = message;
		this.path = path;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getError() {
		return error;
	}
	public void setError(String error) {
		this.error = error;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getPath() {
		return path;
	}
	public void setPath(String path) {
		this.path = path;
	}
	@Override
	public String toString() {
		return "ResponseMessage [status=" + status + ", error=" + error + ", message=" + message + ", path=" + path
				+ "]";
	}

}
