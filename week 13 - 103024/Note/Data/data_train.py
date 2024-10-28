import datetime

training_data = [
  {
    "input": {
        "id": 1,
        "date": {
                "type": 1,
                "datetime": "2024-10-26T16:19",
                "createdAt": "2024-10-26T09:33"
            },
            
        "description":
        {
            "id": 1,
            "title": "ghi chú 1",
            'content': "This is a note about my first todo list item. I want to finish it by the end of January.",
            "priority_level": 1
        },

        "process": {
            "status": "true",
            "actual_duration": round(0.4 * (datetime.datetime.fromisoformat("2024-10-26T16:19") - datetime.datetime.fromisoformat("2024-10-26T09:33")).total_seconds() / 3600),
            "rate_prosess": 0.4
        },

        "analysis": {
            'effort_score': "Hoàn thành tốt",
            'likelihood_to_complete': 0.4,
        },
    },
    "output": {
        "id": 1,
        "prediction": "The task will be completed by the end of January with a high likelihood of success.",
        "recommendation": "Consider prioritizing this task and allocating additional resources if necessary to ensure completion by the deadline.",
        "Title": "ghi chú 1",
        "Creation_time": "2024-10-26T09:33",
        "Due_date": "2024-10-26T16:19",
        "Description": "This is a note about my first todo list item. I want to finish it by the end of January.",
        "Priority_level": 'Cao',
        "Status": "Completed",
        "Progress": "40%",
        "Actual_duration": 7,
        "Dự đoán thời gian hoàn thành": "46h36m",
        "Mức độ phức tạp công việc": "Hoàn thành tốt"
    }
    },
  {
    "input": {
        "id": 2,
        "date": {
                "type": 1,
                "datetime": "2024-11-01T10:00",
                "createdAt": "2024-10-28T14:30"
            },
        
        "description":
        {
            "id": 2,
            "title": "ghi chú 2",
            'content': "This is the second note. I need to complete it by November 1st.",
            "priority_level": 2
        },

        "process": {
            "status": "true",
            "actual_duration": round(0.6 * (datetime.datetime.fromisoformat("2024-11-01T10:00") - datetime.datetime.fromisoformat("2024-10-28T14:30")).total_seconds() / 3600),
            "rate_prosess": 0.6
        },

        "analysis": {
            'effort_score': "Khá tốt",
            'likelihood_to_complete': 0.7,
        },
    },
    "output": {
        "id": 2,
        "prediction": "The task will be completed by November 1st with a high likelihood of success.",
        "recommendation": "Keep up the good work!",
        "Title": "ghi chú 2",
        "Creation_time": "2024-10-28T14:30",
        "Due_date": "2024-11-01T10:00",
        "Description": "This is the second note. I need to complete it by November 1st.",
        "Priority_level": 'Cao',
        "Status": "Completed",
        "Progress": "60%",
        "Actual_duration": 23.5,
        "Dự đoán thời gian hoàn thành": "141h",
        "Mức độ phức tạp công việc": "Khá tốt"
    }
    },
  {
    "input": {
        "id": 3,
        "date": {
                "type": 1,
                "datetime": "2024-11-15T12:00",
                "createdAt": "2024-11-05T08:00"
            },
            
        "description":
        {
            "id": 3,
            "title": "ghi chú 3",
            'content': "This is the third note. I need to complete it by November 15th.",
            "priority_level": 3
        },

        "process": {
            "status": "false",
            "actual_duration": round(0.8 * (datetime.datetime.fromisoformat("2024-11-15T12:00") - datetime.datetime.fromisoformat("2024-11-05T08:00")).total_seconds() / 3600),
            "rate_prosess": 0.8
        },

        "analysis": {
            'effort_score': "Cần cải thiện",
            'likelihood_to_complete': 0.6,
        },
    },
    "output": {
        "id": 3,
        "prediction": "The task is currently in progress and may not be completed by the deadline. It has a moderate likelihood of success.",
        "recommendation": "Consider assigning additional resources or adjusting the deadline to increase the likelihood of completion.",
        "Title": "ghi chú 3",
        "Creation_time": "2024-11-05T08:00",
        "Due_date": "2024-11-15T12:00",
        "Description": "This is the third note. I need to complete it by November 15th.",
        "Priority_level": 'Cao',
        "Status": "Đang thực hiện",
        "Progress": "80%",
        "Actual_duration": 72,
        "Dự đoán thời gian hoàn thành": "576h",
        "Mức độ phức tạp công việc": "Cần cải thiện"
    }
    },
]